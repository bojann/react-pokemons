import React, { Component } from 'react'
import { Table, Grid, Row, Col } from "react-bootstrap/lib/";
import { has, map } from 'lodash'

import { fetchPokeData } from 'services/fetchData'

import './PokeDetail.scss'

export default class PokeDetail extends Component {
  state = {
    activePage: '',
    pokemon: {},
    pokemonImages: {},
    photos: []
  }
  
  componentDidMount() {
    fetchPokeData({selectedPoke: this.props.id})
      .then( response => {
        this.setState(() => {
          return {
            pokemon: response,
            pokemonImages: has(response['sprites'], 'back_default') ? response['sprites'] : {}
          }
        })

        this.renderImages()
      })
  }

  renderImages() {
    const imgArr = map( this.state.pokemonImages , (imgSrc) => {
      return imgSrc
    })

    this.setState( () => {
      return {
        photos: imgArr
      }
    })
  }
  
  render() {
    const { pokemon } = this.state;
    
    return(
     !!(pokemon.name)
      ? <Grid>
         <Row className="show-grid">
           <Col xs={12} md={6}>
             <div className="carousel-pokedetail">
               {
                 this.state.photos.map( (img, index) => {
                   return (
                     img 
                       ? <img key={img} src={img} alt={`${pokemon.name}-${index}`}/>
                       : null
                    )
                 })
               }
             </div>
           </Col>
           <Col xs={12} md={6}>
             <Table responsive>
               <thead>
               <tr>
                 <th>{pokemon.name.toUpperCase()}</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                 <td>Height</td>
                 <td>{pokemon.height}</td>
               </tr>
               <tr>
                 <td>Order</td>
                 <td>{pokemon.order}</td>
               </tr>
               <tr>
                 <td>Base Experience</td>
                 <td>{pokemon.base_experience}</td>
               </tr>
               </tbody>
             </Table>
           </Col>
         </Row>
        </Grid>
      : null
    )
  }
}