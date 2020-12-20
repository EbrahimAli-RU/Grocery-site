import React from 'react'
import classes from './Navigation.css'

class Navigation extends React.Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <i style={{ fontSize: '28px', margin: ' 0px 16px', cursor: 'pointer' }} class="fa fa-bars" aria-hidden="true"></i>
                <a href="/" style={{ fontSize: '28px' }}>Grocery</a>
                <div className={classes.InputDiv}>
                    <input type='text' className={classes.Nav_input} placeholder="Search for products (e.g. eggs, milk, potatos)" />
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <a className={classes.NavigationLink} href="/">Sign in </a>
                <a className={classes.NavigationLink} href="/">EN/BN</a>
                <a className={classes.NavigationLink} href="/"> <i class="fa fa-question-circle" aria-hidden="true"></i>Help & more</a>

            </div>
        )
    }
}

export default Navigation