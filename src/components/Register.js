import { useState } from 'react';

const Register = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const register = (e) => {
    e.preventDefault();

    const user = {
      name,
      password,
      username
    };
  };

  return (
    <div>
      <form onSubmit={register}>
        <h1>Register</h1>
        <input
          className='form-control'
          onChange={(e) => setName(e.target.value)}
          placeholder='name'
          type='text'
          value={name}
        />
        <input
          className='form-control'
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
          type='text'
          value={username}
        />
        <input
          className='form-control'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          type='text'
          value={password}
        />
        <input
          className='btn btn-primary'
          type='submit'
          value='REGISTER'
        />
      </form>
    </div>
  );
}

export default Register;
