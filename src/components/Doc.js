import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Grid from 'material-ui/Grid';

const md = `# Studying Javascript Classes

Mi nombre es \`Cesar\``;

export default class Doc extends Component {
  render() {
  	return (
          <Grid container gutter={0}>
            <Grid item md={2}>
             {/* Aca pueden ir articulos recomendados*/}
            </Grid>
            <Grid item md={8}>
              <Markdown source={md}/>
            </Grid>
            <Grid item md={2}>
             {/* Aca va publicidad*/}
            </Grid>
          </Grid>
  		);
  }
}