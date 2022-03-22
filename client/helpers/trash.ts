import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default (title:string='', subtitle:string='', cb:Function, customization=false) => {
    if(customization){
        cb();
        return;
    }
    Swal.fire({
        title: 'Are you sure?',
        text: title||"You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result:any) => {
        if (result.isConfirmed) {
            cb();
            Swal.fire(
            'Deleted!',
            subtitle||'Your file has been deleted',
            'success'
            )
        }
    })
}

