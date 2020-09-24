import React, { Component } from 'react';
import { JournalEntry } from './journal_entry'

const rawJournalData = [
    { title: "Post One", content: "Post content", status: 'draft' },
    { title: "Post Two", content: "more content", status: 'Published' },
    { title: "Post Three", content: "please shut content", status: 'Published' },
    { title: "Post Four", content: "Omg, are you still talking content", status: 'Published' },
]

// class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: "hi There",
            isOpen: true,
        };
    }
    showGreeting = () => {
        this.setState({greeting: greeting})
    }

    clearEntries = () => {
        this.setState({ journalData: [], isOpen: false});
    };
    showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen:true});
    };

    toggleStatus = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false});
        } else {
            this.setState({ journalData: rawJournalData, isOpen: true});
        }
    };

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry title={journalEntry.title} content={journalEntry.content} />    
                </div>
            )
        })
        return (
            <div>
                <h2>{this.props.heading }</h2>
                {journalEntries}

                <button onClick={this.clearEntries}>Clear Journal Entries</button>
                <button onClick={this.showAllEntries}>Show All Entries</button>
                <button onClick={this.toggleStatus}>Toggle Entries</button>
                <button onClick={this.showGreeting}>Greeting</button>
            </div>   
        );
    };
}