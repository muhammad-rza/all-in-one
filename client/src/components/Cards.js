


import React, { Component } from 'react';


export default class Card extends Component {

    render() {

        return (
            <div className="p-5">
                <div className="d-flex flex-wrap m-auto" style={{width:"1200px"}}>
                    { [...Array(13).keys()].map((item,index)=> 
                                            
                         <div key={index} className="card mb-4 mx-1" style={{width:"290px"}}>
                            <img className="card-img-top" src="http://via.placeholder.com/100" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )

                    }
                </div>

            </div>
        )

    }

}