import { Form, Input, Button, message } from 'antd';
import Logo from '../assets/logo.png'

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="col-md-6 col-11 mx-auto d-flex flex-column justify-content-center" style={{height: "100vh"}}>
            <img className="img mx-auto" height="150px" width="150px" src={Logo} alt="HelpCorona Logo" />
            <h1 className="text-center">Volunteer Portal</h1>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <label className="m-0 p-0" htmlFor="email">Email</label>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder="Please enter your email" />
                </Form.Item>
                <label className="m-0 p-0" htmlFor="password">Password</label>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Please enter your password" />
                </Form.Item>

                <Form.Item className="text-center">
                    <Button className="mx-auto" type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login