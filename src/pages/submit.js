import styles from '@/styles/submit.module.css'
import Navbar from '@/components/Navbar'

export default function Submit(){
    const handleSubmit = async (event) =>{
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        // Get data from the form.
    const data = {
        country: event.target.country.value,
        city: event.target.city.value,
        year: event.target.year.value,
        url: event.target.year.value
    }
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    // API endpoint where we send form data.
    const endpoint = '/public/data.json'
    // Form the request for sending data to the server.
    const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
      // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }

    
    return(
        <>
        <Navbar/>
        <div className={styles.submitContainer}>
            <h1>Submit</h1>
            <h2>Contribute Images to the game</h2>
            <form onSubmit={handleSubmit}>
                <label for="country">Country:</label>
                <input type="text" id="country" name="country" />
                <label for="city">City:</label>
                <input type="text" id="city" name="city" />
                <label for="year">Year:</label>
                <input type="number" id="year" name="year" required/>
                <label for="url">Image URL:</label>
                <input type="text" id="url" name="url" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}