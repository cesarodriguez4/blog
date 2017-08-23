import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Grid from 'material-ui/Grid';

let md = '';
let cd = '';
let td = '';

export default class Doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idDoc: '',
      doc: null
    }
  }
  componentWillMount() {
    const URL_INFO = `http://api.cesarjs.xyz/news/${this.props.match.params.id}`;
    this.setState({idDoc: this.props.match.params});
    fetch(URL_INFO)
    .then(response => {
      if (response.status !== 200) {
        console.log('Problem with the response');
        return;
      }
      response.json().then(data => {
        this.setState({doc: data[0]});
      });
    });
  }
  render() {
    if (this.state.doc) {
      td = <h1>{this.state.doc.title}</h1>;
      cd = <img alt={this.state.doc.title} src={this.state.doc.cover}/>;
      md = this.state.doc.content;
    } else {
      md = 'Loading...';
      cd = '';
      td = '';
    }
  	return (
          <Grid container>
            <Grid item md={2}>
             {/* Aca pueden ir articulos recomendados*/}
            </Grid>
            <Grid className='content-md markdown-body' item md={8} xs={10}>
              <div>{td}</div>
              <div>{cd}</div>
              <Markdown source={md}/>
            </Grid>
            <Grid item md={2}>
             {/* Aca va publicidad*/}
            </Grid>
          </Grid>
  		);
  }
}
