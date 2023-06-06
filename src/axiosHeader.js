const headers =  {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
}

const headersWithoutBearer =  {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': localStorage.getItem('token')
}


export {headers , headersWithoutBearer}