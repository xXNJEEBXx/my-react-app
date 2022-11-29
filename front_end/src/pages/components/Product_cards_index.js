import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";


class Product_cards_index extends Component {

    state = {
        data: null,
    }
    componentDidMount() {
        // console.log("res.data")
        // axios.get('http://127.0.0.1:8000/api').then(res => {
        //     console.log(res.data)
        //     this.setState({ data: res.data })
        //     console.log(this.state.data)
        // })
    }


    price(main_price, sup_price) {
        if (sup_price == 0) {
            return (
                <div>
                    <div className="flex justify-content-center " style={{ fontSize: '40px', color: 'blue' }}>
                        <span style={{ fontSize: "40px" }}>SAR {main_price}</span>
                    </div>
                    <div style={{ height: '57px' }} >
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="flex justify-content-center " style={{ fontSize: "40px", color: 'blue' }}>
                        <span>SAR {main_price}</span>
                    </div>
                    <div className="color-gray flex  text-decoration-line-through   justify-content-center" style={{ fontSize: '13px' }}>
                        <span style={{ fontSize: "40px" }}>SAR {sup_price}</span>
                    </div>
                </div>
            )
        }
    }

    product_card(name, main_price, sup_price) {
        return (
            <a>
                <div style={{ display: 'inline-block', textAlign: 'center', margin: '20px', cursor: "pointer" }} className="product-card media-product-card box-shadow ">
                    <img style={{ width: '360px', height: '360px' }} className="media-product-photo" />
                    <div style={{ paddingBottom: "20px" }}>
                        <span style={{ marginInline: 'auto', marginTop: '10px', width: '200px', color: 'white', transition: '0.3s', borderBottom: '1px solid rgb(125, 125, 255)', fontSize: "40px", paddingInline: "15px" }} className="buy-now-blue color-white ">
                            BUY NOW
                        </span><br />
                        <span style={{ color: 'gray', fontSize: "40px" }} >{name}</span>
                        {this.price(main_price, sup_price)}
                    </div>
                </div>
            </a >
        );
    }


    product_cards(type) {
        var data = this.state.data;
        var product_cards = data.map(product => {
            if (product.type == type) {
                return (
                    this.product_card(product.name, product.main_price, product.sup_price)
                )
            }
        });
        return (
            product_cards
        )
    }

    products_card_row(num) {
        // console.log("TYPE" + num)
        var products_card_row_state = null
        console.log(this.product_cards("TYPE" + num))
        this.product_cards("TYPE" + num).forEach(element => {

            if (element != null) {
                products_card_row_state = true
            }
        });

        if (products_card_row_state === null) {
            return (
                <div id={"part" + num + "_bar"} style={{ display: "none" }}>
                    <h1>Thare is no product added here yet</h1>
                </div>
            )

        } else {
            if ("TYPE" + num == "TYPE1") {
                return (
                    <div id={"part" + num + "_bar"} className="grid ">
                        {this.product_cards("TYPE" + num)}
                    </div>
                )
            }
            else {
                return (
                    <div id={"part" + num + "_bar"} className="grid " style={{ display: "none" }}>
                        {this.product_cards("TYPE" + num)}
                    </div>
                )
            }
        }
    }
    test = function name(num) {
        $("#part" + num).addClass("tab-active")
        $("#part" + num).siblings().removeClass("tab-active")
        $("#part" + num + "_bar").fadeIn(600);
        $("#part" + num + "_bar").css("display", "grid");
        $("#part" + num + "_bar").siblings().hide()

    }

    render() {
        var data = this.state.data
        if (data == null) {
            return "Loding..."

        } else {

            var products_card_rows =
                <div className=" products-card-rows " style={{ marginBottom: '100px' }}>
                    {this.products_card_row(1)}
                    {this.products_card_row(2)}
                    {this.products_card_row(3)}
                </div>
            return (
                <div className="container text-center">
                    <div>
                        <div style={{ marginBlock: '80px' }}>
                            <button id="part1" onClick={() => this.test(1)} style={{ width: '230px' }} className="tap-white tab-active ">PART1</button>
                            <button id="part2" onClick={() => this.test(2)} style={{ width: '230px' }} className="tap-white remove-space-between-inline ">PART2</button>
                            <button id="part3" onClick={() => this.test(3)} style={{ width: '230px' }} className="tap-white remove-space-between-inline">PART3</button>
                        </div>
                        {products_card_rows}
                    </div>
                </div>
            )
        }
    }
}

export default Product_cards_index;

