import React from 'react'
import { Link } from "react-router-dom"

export default class Detail extends React.Component {
    render() {
        return (
            <div className="site">
                <Link to="/">
                    场地详情页
                </Link>
            </div>
        )
    }
}
