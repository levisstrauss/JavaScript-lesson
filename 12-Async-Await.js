//------ Usage -------->

//------- Async------------>
async function fetchData() {
    return "Data fetched";
}
// -------- Await--------->
async function displayData() {
    let data = await fetchData();
    console.log(data);
}
//---------- Error handling-------->
/*
In the above example, if any part of the asynchronous operations throws an error (for instance, if the fetch
operation fails), the code will jump to the catch block.
 */
async function fetchDataWithHandling() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching the data:', error);
    } finally {
        console.log('Operation completed');
    }
}

