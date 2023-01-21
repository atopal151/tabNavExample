import React, { Component } from 'react';
import { View,Platform,Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

const isIos=Platform.IOS==='ios';

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            page: 1,
            contacts: [],
            allContacts: [],
            loading: true,
            refreshing:false
        };
        this.duringMomentum=false;
    };

   

    componentDidMount() {
        this.getContacts();
    }

    getContacts = async () => {

        this.setState({
            loading: true
        });
        const { data: { results: contacts } } = await axios.get(`https://randomuser.me/api/?results=30&page=${this.state.page}`);
        const users = [...this.state.contacts, ...contacts];

        if(this.state.refreshing){
            users.reverse();
        }

        this.setState({
            contacts: users,
            allContacts: users,
            loading: false,
            refreshing:false
        })
    }

    loadMore = () => {
        if (!this.duringMomentum) {
            this.setState({
                page: this.state.page + 1,

            }, () => {
                this.getContacts();
            });
            this.duringMomentum = false;
        }
    };
    onRefresh=()=>{
        this.setState({
            page:  1,
            refreshing:true

        }, () => {
            this.getContacts();
        });
    };

    gotoDetail=user=>{
        this.props.navigation.navigate('ConDetail', {user})
    };

    renderContactItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=> this.gotoDetail(item)}
             style={[styles.itemContainer, 
             { backgroundColor: index % 2 === 1 ? '#ebebeb' : '' }]}>
                <Image style={styles.avatar} source={{ uri: item.picture.thumbnail }} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name.first}{item.name.last}</Text>
                    <Text style={styles.name}>{item.location.state}</Text>
                </View>
            </TouchableOpacity>);
    };
    // ${item.name.toLowerCase()} ${item.company.toLowerCase()}
    searchFilter = text => {
        const newData = this.state.allContacts.filter(item => {
            const listItem = item.name.first.toLowerCase() + item.name.last.toLowerCase() + item.location.state.toLowerCase()
            return listItem.indexOf(text.toLowerCase()) > -1;
        });
        this.setState({
            contacts: newData,
        });
    };

    renderHeader = () => {
        const { text } = this.state;
        return (
            <View style={styles.searchContainer} >
                <TextInput
                onFocus={()=> this.duringMomentum=true}
                onBlur={()=> this.duringMomentum=false}
                    onChangeText={text => {
                        this.setState({
                            text,
                        });
                        this.searchFilter(text);
                    }}
                    style={styles.searchInput}
                    placeholder='Write here...' />
            </View>
        )
    }

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }


    render() {
        return (
            <FlatList
                ListFooterComponent={this.renderFooter}
                ListHeaderComponent={this.renderHeader()}
                renderItem={this.renderContactItem}
                data={this.state.contacts}
                keyExtractor={(item) => item.login.uuid}
                onEndReached={this.loadMore}
                onEndReachedThreshold={isIos ? 0 : .2}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                />
               

        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    textContainer: {
        justifyContent: 'space-around'
    },
    name: {
        fontSize: 16
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 20,
    },
    searchContainer: {
        padding: 10,
        backgroundColor:'white',
    }


})