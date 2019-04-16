import React from 'react';
import {Link} from "react-router-dom";

export default class Detail extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                    这是详情页,点击进入首页
                </Link>
            </div>
        )
    }
}
