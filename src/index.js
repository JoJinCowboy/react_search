import React from 'react';
import ReactDOM from 'react-dom';
// import CalendarComponent from './includes/calendar';
import style from './index.css';

import { HashRouter, Route } from 'react-router-dom';



//
// const Index = () => {
//     return <div>Hello React!</div>;
// };
//
// ReactDOM.render(<Index />, document.getElementById("index"));


var createReactClass = require('create-react-class');
var RecentChangesTable = createReactClass({
    render: function(){
        return(
            <table classID="" className = {style.table}>
                {this.props.children}
            </table>
        );
    }
});

RecentChangesTable.Heading = createReactClass({
    render: function(){
        return(
            <th className={style.heading_style}>
                {this.props.heading}
            </th>
        );
    }
});

RecentChangesTable.Headings = createReactClass({
    render: function(){
        var headings = this.props.headings.map(function(name, index) {
            return(
                <RecentChangesTable.Heading key={index} heading = {name}/>
            )
        });
        return(
            <thead>
            <tr>
                {headings}
            </tr>
            </thead>
        );
    }
});

RecentChangesTable.Rows = createReactClass({
    render: function(){
        var rows = this.props.changeSets.map(function(changeSet,index) {
            return(
                <RecentChangesTable.Row key={index} changeSet = {changeSet}/>
            )
        });
        return(
            <tbody>
            {rows}
            </tbody>
        );
    }
});

RecentChangesTable.Row = createReactClass({
    render: function(){
        return(
            <tr>
                <td className={style.cell_style}>{this.props.changeSet.when}</td>
                <td className={style.cell_style}>{this.props.changeSet.who}</td>
                <td className={style.cell_style}>{this.props.changeSet.description}</td>
            </tr>
        );
    }
});


class App extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            headings: '',
            data: ''
        }
    }

    componentDidMount()
    {

        //api fetching part
        // fetch('http://18.222.48.211:8081/api/Users/PostUser')
        //     .then(response => {
        //         if(response.ok)
        //         {
        //             return response.json()
        //             console.log("api connection ok");
        //         }
        //         else
        //         {
        //             throw new Error('Something went wrong...')
        //             console.log("api connection is not ok");
        //         }
        //     })
        //     .
        //     then(data => this.setState({
        //             hits: data.hits,
        //             isLoading: false
        //         })
        //     )
        //     .
        //     catch(error => this.setState({
        //             error: null,
        //             isLoading: false
        //         })
        //     )
    }


    // propTypes: {
    //     headings: React.PropTypes.constructor
    //     changeSets: React.PropTypes.array
    // }
//     getInitialState: function(){
//         return(
//           changesets: []
//         );
// }
    render(){

        return(

            <div className={style.contain}>
                <div className={style.header_style}>
                    <div className={style.title_style}>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className={style.space_line}></div>
                    <div className={style.menu_style}>
                        <ul className={style.menu_ul_style}>
                            <li className={style.menuitem_style}>
                                <a href="http://localhost:3000/">
                                    <button className={style.menu_button_style} onClick={this.handleClick}>Home</button>
                                </a>
                            </li>
                            <li className={style.menuitem_style}>
                                <a href="/privacy">
                                    <button className={style.menu_button_style} onClick={this.handleClick}> Privacy Policy of Team </button>
                                </a>
                            </li>
                            <li className={style.menuitem_style}>
                                <a href="/term">
                                    <button className={style.menu_button_style} onClick={this.handleClick}> Terms of Team </button>
                                </a>
                            </li>
                            <li className={style.menuitem_style}>
                                <a href='/contactus'>
                                    <button className={style.menu_button_style} onClick={this.handleClick}> Contact US </button>
                                </a>
                            </li>
                            <li className={style.menuitem_style}>
                                <a href="/portfolio">
                                    <button className={style.menu_button_style} onClick={this.handleClick}> Portfolio of Team </button>
                                </a>
                            </li>
                            <li className={style.menuitem_style}>
                                <a href="/login">
                                    <button className={style.menu_button_style} onClick={this.handleClick}> Login & Register </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.space_line}></div>
                <div className={style.content_style}>
                    <div className={style.content_section}>
                        <RecentChangesTable >
                            <RecentChangesTable.Headings headings = {this.props.headings} />
                            <RecentChangesTable.Rows changeSets = {this.props.changeSets} />
                        </RecentChangesTable>
                    </div>
                    <div className = {style.sidebar_section}>
                        <li className={style.menuitem_style}>
                            <input type = 'text' className={style.search_input} placeholder='Please type your keyword'/>
                            <a href="#">
                                <button onClick={this.handleClick}>Search</button>
                            </a>
                        </li>
                        <li className={style.menuitem_style}>
                            {/*<CalendarComponent />*/}
                        </li>
                        <li>
                            <div className="">
                            </div>
                        </li>
                    </div>
                </div>
            </div>


        );
    }
}

var data = [{
    "when": "Boss",
    "who": "Saturn",
    "description": "Project Management"
},
    {
        "when": "Developer",
        "who": "Steel",
        "description": "Javascript"
    },
    {
        "when": "Developer",
        "who": "Silver",
        "description": "Laravel"
    },
    {
        "when": "Developer",
        "who": "Jincowboy",
        "description": "Wordpress"
    },
    {
        "when": "Developer",
        "who": "Glassman",
        "description": "Wordpress"
    },
    {
        "when": "Developer",
        "who": "World",
        "description": "Excel"
    }];
var title = 'Jincowboy Developer Team';
var headings = ["Duty", "NickName", "Qualified Skill"];

var props = { title: title, headings: headings, changeSets: data};

// var propTypes = {
//     headings: React.props.array,
//         changeSets: React.pr.array,
//         author: React.PropTypes.string.isRequired
// }

ReactDOM.render(<App {...props}/>, document.getElementById('index'));

// App.propsTypes = {
//     headings: React.PropTypes.array,
//         changeSets: React.PropTypes.array,
//         author: React.PropTypes.string.isRequired
// }
// export default Basic;

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "123",
//     database: "jincowboyteam"
// });
//
// // connection.connect();
//
// var db_query_result = connection.query('select * from member', function(err, result) {
//     console.log("Error");
// });


{/*<HashRouter>*/}
{/*<div>*/}
{/*<App title={title} headings={headings} changeSets={data}/>*/}
{/*<Route path="/contactus" render={()=><ContactUs/>}/>*/}
{/*<Route path="/notfound" render={()=><Notfound/>}/>*/}
{/*</div>*/}
{/*</HashRouter>*/}

//table data set

// ReactDOM.render((
//

//
// ), document.getElementById('container'));
