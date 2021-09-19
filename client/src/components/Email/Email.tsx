import React, { useState } from 'react'
import './Email.scss'

const Email = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className='email'>
      <div className='email__container'>
        <h3>Like what you see?</h3>
        <p>Signup to be notified when Todoify releases new updates.</p>
        <form className='email__form'>
          <div className='email__form__name'>
            <div className='email__form__name__field'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' id='firstName' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='email__form__name__field'>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <button>Keep Me Up To Date</button>
        </form>
      </div>
    </div>
  )
}

export default Email
