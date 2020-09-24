import React, {Component} from 'react';
import './myProfile.less';

const options =[{ value: 'male', label: 'male'},
    { value: 'female', label: 'female'}];

class MyProfile extends Component {
    state = {
        name: '',
        gender: 'male',
        description: '',
        tick: true
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state))
    }



    render() {
        return <form onSubmit={this.handleSubmit}>
                <header>My Profile</header>
                <label className='name'>
                    Name
                    <input type='text'
                           name='name'
                           onChange={this.handleChange}
                           value={this.state.name}/>
                </label>
                <label  className='gender'>
                    Gender
                    <select value={this.state.value}
                            name='gender'
                            onChange={this.handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <label className='description'>
                    Description
                    <input type='text'
                           name='description'
                           onChange={this.handleChange}
                           value={this.state.description}/>
                </label>
                <input className='tick'
                       type='checkbox'
                       name='tick'
                       checked={this.state.tick}
                       onChange={this.handleChange}/>
                I have read the terms of conduct
                <input className='submit'
                       type='submit'
                       name='submit'
                       disabled={!this.state.name || !this.state.description || !this.state.tick}/>
            </form>
    }
}

export default MyProfile;


