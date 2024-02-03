document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการส่งค่าแบบฟอร์ม

    let searchTerm = document.getElementById("searchInput").value;

    if (searchTerm.trim() == "Prang") {
        var searchURL = "https://github.com/newnattapon395/First_Project/tree/main/index" + encodeURIComponent(searchTerm);
        window.location.href = searchURL;
    } else {
        alert("ไม่มีสิ่งที่หา");
    }
});