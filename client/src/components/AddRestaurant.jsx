import React from 'react'

function AddRestaurant() {
  return (
    <div class="mb-4">
        <form action="">
            <div class="row">
                <div class="col">
                    <input type="text" className="form-control" placeholder='name'/>
                </div>
                <div class="col">
                    <input type="text" className="form-control" placeholder='location'/>
                </div>
                <div class="col">
                    <select name="price range" className='custom-select my-1 mr-sm-2'>
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant
