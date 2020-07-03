import React from "react"
import logo from "../../static/images/logo.svg"
import icon from "../../static/images/egg_white.png"

const Members = () => (
    <div className={"container"}>

        <div className={"row"}>
            <div className={"col-4"}>
                <img alt={"Logo"} src={logo} />
            </div>
            <div className={"col-4"}>
                <img alt={"Logo"} src={logo} />
            </div>
            <div className={"col-4"}>
                <img alt={"Logo"} src={logo} />
            </div>
        </div>

        <div className={"row"}>
            <div className={"icons-header"}>
                ほげ
            </div>
        </div>

        <div className={"row icons"}>
            <div className={"col-4"}>
                <div className={"icon-item"}>
                    <img alt={"mak"} src={icon} />
                    <span className={"name"}>ああああああああああああああああああああああああ</span>
                </div>
            </div>
            <div className={"col-4"}>
                <div className={"icon-item"}>
                    <img alt={"mak"} src={icon} />
                    <span className={"name"}>ああああああああああああああああああああああああ</span>
                </div>
            </div>
            <div className={"col-4"}>
                <div className={"icon-item"}>
                    <img alt={"mak"} src={icon} />
                    <span className={"name"}>ああああああああああああああああああああああああ</span>
                </div>
            </div>
            <div className={"col-4"}>
                <div className={"icon-item"}>
                    <img alt={"mak"} src={icon} />
                    <span className={"name"}>ああああああああああああああああああああああああ</span>
                </div>
            </div>
            <div className={"col-4"}>
                <div className={"icon-item"}>
                    <img alt={"mak"} src={icon} />
                    <span className={"name"}>ああああああああああああああああああああああああ</span>
                </div>
            </div>
            <div className={"col-4"}>
                <div className={"icon-item"}>
                    <img alt={"mak"} src={icon} />
                    <span className={"name"}>ああああああああああああああああああああああああ</span>
                </div>
            </div>
        </div>

        <div className={"row icons"}>
            <div className={"col-2"}>
                <img alt={"mak"} src={icon} />
            </div>
            <div className={"col-2"}>
                <img alt={"mak"} src={icon} />
            </div>
            <div className={"col-2"}>
                <img alt={"mak"} src={icon} />
            </div>
        </div>
    </div>
)

export default Members
