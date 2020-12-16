import React from 'react'
import ItemInput from '../components/ItemInput'
import Items from '../components/Items'


class ItemsContainer extends React.Component {
     render () {
         return (
             <div>
                 <ItemInput/>
                 <Items items={this.props.project && this.props.project.items}/>
             </div>
         )
     }

}

export default ItemsContainer