import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Button, Row, Form, Input, Checkbox,Icon } from "antd"
import { config } from "@/config"
import styles from "./index.less"
import LoginActions from "@/redux/LoginRedux"
import WebIM from "@/config/WebIM"

const FormItem = Form.Item

const Login = ({
    I18N,
    login,
    doLogin,
    doLoginByToken,
    jumpRegister,
    form: { getFieldDecorator, validateFieldsAndScroll }
}) => {
    const { loginLoading } = login

    const handleOk = () => {
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return
            }
            console.log(values)
            if (values.type) {
                doLoginByToken(values.username, values.password)
            } else {
                doLogin(values.username, values.password)
            }
        })
    }

    // const a = {}
    // const b = a.b.c
    // console.log(messageList, "---")

    return (
        <div className=" center">
            <h3>XX110网上报警平台</h3>
            <form className="login-content">
                <FormItem hasFeedback>
                    {getFieldDecorator("username", {
                        rules: [
                            {
                                required: false
                            }
                        ]
                    })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" className="username" placeholder="在此输入您的用户名"/>)}
                </FormItem>
                <FormItem hasFeedback>
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: false
                            }
                        ]
                    })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" type="password" className="pwd" placeholder="在此输入您的密码"/>)}
                </FormItem>
                {/*<FormItem hasFeedback>{getFieldDecorator("type")(<Checkbox>{I18N.tokenSignin}</Checkbox>)}</FormItem>*/}
                <Row>
                    <Button type="primary" size="large" onClick={handleOk} className="btn-login" loading={loginLoading}>
                        {I18N.signIn}
                    </Button>
                </Row>
            </form>
            <div className="extra">
                <p>
                    {I18N.noaccount}
                    <span onClick={jumpRegister}>{I18N.signUp}</span>
                </p>
            </div>
        </div>
    )
}

Login.propTypes = {
    form: PropTypes.object,
    login: PropTypes.object,
    dispatch: PropTypes.func
}

export default connect(
    ({ login, i18n }) => ({
        I18N: (i18n.locale && i18n.translations && i18n.translations[i18n.locale]) || {},
        login: {
            loginLoading: false
        }
    }),
    dispatch => ({
        doLogin: (username, password) => dispatch(LoginActions.login(username, password)),
        doLoginByToken: (username, token) => dispatch(LoginActions.loginByToken(username, token)),
        jumpRegister: () => dispatch(LoginActions.jumpRegister())
    })
)(Form.create()(Login))
