import React from 'react';

class AddItem extends React.Component{

    render() { 
        return (
            <>
            <div className="container inputs">
            Quantity:
                <div className="input-group mb-3 col-4">
                    <div className="input-group-prepend">
                    </div>
                    <select onChange={this.props.quantityChange} className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            Products:
                <div className="input-group mb-3 col-4">
                    <div className="input-group-prepend">
                    </div>
                        <select onChange={this.props.itemSelect} className="custom-select" id="inputGroupSelect01">
                            <option defaultValue>Select an Option...</option>
                            {this.props.productList.map( product => {
                            return (
                                <option key={product.id} value={product.name + "-" + product.priceInCents}>{product.name}</option>
                            )
                            })}
                        </select>
                    </div>
                </div>
                <button onClick={this.props.addItem} className="aButton btn-primary">Add to Order</button>
                </>
        )
    }
}

export default AddItem