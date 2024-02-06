$.ajax({
  url: "https://api.thecatapi.com/v1/images/search",
  method: "GET",
  success: function (data) {
    if (data && data.length > 0) {
      var catImageUrl = data[0].url;
      document.body.style.backgroundImage = `url('${catImageUrl}')`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";

      var cat = document.createElement("div");
      cat.style.position = "fixed";
      cat.style.top = "0";
      cat.style.left = "0";
      cat.style.width = "100%";
      cat.style.height = "100%";
      cat.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${catImageUrl}')`;
      cat.style.backgroundSize = "cover";
      cat.style.backgroundPosition = "center";
      cat.style.zIndex = "-1";

      document.body.appendChild(cat);
    }
  },
  error: function (error) {
    console.error("Error fetching cat data:", error);
  },
});
