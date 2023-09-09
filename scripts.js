var searchInput = document.getElementById("searchUP");
const log = document.getElementById("test");

// console.log(searchInput);

searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      updateValue(e);
    }
  });
  
  function updateValue(e) {
    const searchQuery = e.target.value;
    if (searchQuery.trim() !== "") {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = googleSearchUrl;
    }
  }