import Fetch from './Fetch.js'
export const BASE_URL ='http://192.168.1.108:3002'
// const BASE_URL1 = 'http://112.74.203.143'
const BASE_URL1 =BASE_URL
const BASE_URL2 = BASE_URL
// 112.74.203.143
export var POST = (Url, data = {}, trueF, errorF = e => { }, timeout = 5000) => {
  Fetch(
    fetch(BASE_URL1 + Url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
      body: data
    })
      .then(req => req.json())
      .then(re => {
        if(re.token){
         sessionStorage.setItem('token',re.token);
      }
        if (re.status === 24) {
          alert('服务器错误')
        } else if (re.status === 25) {
          alert('数据库错误')
        } else {
          trueF(re)
        }
      })
      .catch(e => {
        errorF(e)
      }),
    timeout
  )
}
export var POST1 = (
  Url,
  data = {},
  trueF,
  errorF = e => { },
  timeout = 50000
) => {
  Fetch(
    fetch(BASE_URL2 + Url, {
      mode: 'cors',
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization:sessionStorage.getItem('token'),
      },
      body: data
    })
      .then(req => req.json())
      .then(re => {
        if(re.token){
         sessionStorage.setItem('token',re.token);
      }
        if (re.status === 0) {
          alert('服务器错误')
        }  else {
          trueF(re)
        }
      })
      .catch(e => {
        errorF(e)
      }),
    timeout
  )
}
export var POSTFile = (
  Url,
  data = {},
  trueF,
  errorF = e => { },
  timeout = 5000
) => {
  Fetch(
    fetch(BASE_URL2 + Url, {
      mode: 'cors',
      method: 'POST',
      credentials: 'include',
      body: data
    })
      .then(req => req.json())
      .then(re => {
        if (re.status === 21) {
          alert('请登录')
        } else if (re.status === 24) {
          alert('服务器错误')
        } else if (re.status === 25) {
          alert('数据库错误')
        } else {
          trueF(re)
        }
      })
      .catch(e => {
        errorF(e)
      }),
    timeout
  )
}
export var GET = (Url, trueF, errorF = e => { }, timeout = 5000) => {
  Fetch(
    fetch(BASE_URL1 + Url, {
      mode: 'cors',
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
      .then(req => req.json())
      .then(re => {
        if (re.status === 21) {
          alert('请登录')
        } else if (re.status === 24) {
          alert('服务器错误')
        } else if (re.status === 25) {
          alert('数据库错误')
        } else {
          trueF(re)
        }
      })
      .catch(e => {
        errorF(e)
      }),
    timeout
  )
}
