/**
 * Created by abhishek on 23/07/17.
 */
'use strict'

import axios from 'axios'

export default axios.create({
  baseURL: `http://localhost:3000/api/`
  /*  headers: {
    Authorization: 'Bearer {token}'
  } */
})
