import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { error },reset } = useForm();
    const { login, user } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard';
    const onSubmit = (data) => {
        console.log(data)
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                reset()
            })
    }
    return (
        // <Container>
        //     <Row>
        //         <Col md={7} className='mx-auto'>
        //             <form onSubmit={handleSubmit(onSubmit)}  className='p-4 border border-1'>
        //             <input placeholder="Enter Your Email" type="email" className='p-2 form-control mt-3' {...register("email")} />
        //             <input placeholder='Enter Your password' type='password' className='p-2 form-control mt-3' {...register("password")} />
        //             <div className="mx-auto text-center"> 
        //    <button type="submit">Login</button>
        //    </div>
        //    <p className='mt-3 text-center'>If you Don't have any Account please <Link to='/reg'>Register</Link></p>
        //             </form>
        //         </Col>
        //     </Row>
        // </Container>
        <Container>
            <Row>
                <Col sm={7} className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>

                        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-envelope"></i></span>
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address"  {...register("email")} required="" autofocus="" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                            <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control " placeholder="Password" {...register("password")} required="" />
                        </div>

                       






                        
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                        <p className='mt-3 text-center'>If you Don't have any Account please <Link to='/reg'>Register</Link></p>

                    </form>
                </Col>
            </Row>
        </Container>

    );
};

export default Login;