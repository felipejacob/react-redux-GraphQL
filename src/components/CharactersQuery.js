import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';


export const CharactersQuery = () => {
  return (
    <Query
      query={gql`
        {
          characters {
            results {
              id
              name
              status
              image
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        return data.characters.results.map((character) => {
          return (
            <div>
              <Container>
                <Row>
                  <Col id={character.id} lg={3} md={4} sm={6} xs={12} className="alignMonsters">
                    
                    <div>
                      <div className="monsterStatus">{character.status}</div>
                      <img src={character.image} alt="nada" className="formatImg"></img>
                      <div className="monsterName">{character.name}</div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        });
      }}
    </Query>
  );
};

export default CharactersQuery