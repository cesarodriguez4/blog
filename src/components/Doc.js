import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Grid from 'material-ui/Grid';
import ReactLoading from 'react-loading';

let md = '';
let cd = '';
let td = '';

const style = {
  loading: {
    backgroundColor: 'rgb(201, 191, 202)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  txt: {
    marginBottom: '10%'
  }
}

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
    } else {
      return (
        <div style={style.loading}>
        <ReactLoading className='loading' type={'bars'} color={'grey'} height='300' width='300' />
        <h1 style={style.txt}>Loading...</h1>
        </div>);
    }
  }
}
