        const youtubeKey="AIzaSyAgyx1_HtBXKKICqfhSvEqeBkqjUVrxTxU";

        
        let getSub = ()=>{
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=mosh&type=video&key=AIzaSyAgyx1_HtBXKKICqfhSvEqeBkqjUVrxTxU`).then(response =>{
                return response.json()
            }).then(data =>{
                console.log(data);
            })
        }
        getSub();

        function search1(){
var id_value=document.getElementById("inp_value").value;
            fetch(`https://www.googleapis.com/youtube/v3/channels?id=${id_value}&key=${youtubeKey}&part=snippet,contentDetails,status,statistics`).then(response =>{
                return response.json()
            }).then(data =>{
                console.log(data);
        let     title=data["items"][0].snippet.title;
        let     descrip=data["items"][0].snippet.description;
        let     vc=data["items"][0].statistics.videoCount;

            document.getElementById("card1_1").innerHTML=` ${title}`;
            document.getElementById("card1_2").innerHTML=` ${descrip}`;
            document.getElementById("card1_3").innerHTML=` ${vc}`;

            })


        }
        function search2(){
var id_value=document.getElementById("inp_value_2").value;
            fetch(`https://www.googleapis.com/youtube/v3/channels?id=${id_value}&key=${youtubeKey}&part=contentDetails,status,statistics&part=snippet&maxResults=30`).then(response =>{
                return response.json()
            }).then(data =>{
                console.log(data);
        let     title=data["items"][0].snippet.title;
        let     descrip=data["items"][0].snippet.description;
        let     vc=data["items"][0].statistics.videoCount;
        https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20
            document.getElementById("card2_1").innerHTML+=` ${title}`;
            document.getElementById("card2_2").innerHTML+=` ${descrip}`;
            document.getElementById("card2_3").innerHTML+=` ${vc}`;

            })

            fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeKey}&channelId=${id_value}&part=snippet,id&order=date&maxResults=20`).then(response =>{
                return response.json()
            }).then(data =>{
                console.log(data);
        let     title=data["items"];
        // alert(title)
        title.forEach(function(genre) {
        document.getElementById("card2_4").innerHTML+=`* ${genre.snippet.title}<br>`;
});
            })


        }
        function search3(){
var id_value=document.getElementById("inp_value_3").value;
            fetch(`https://www.googleapis.com/youtube/v3/channels?id=${id_value}&key=${youtubeKey}&part=snippet,contentDetails,status,statistics`).then(response =>{
                return response.json()
            }).then(data =>{
                // alert(data)
                console.log(data);
        let     title=data["items"][0].snippet.title;
        let     subscrib=data["items"][0].statistics.subscriberCount;
        // let     vc=data["items"][0].statistics.videoCount;

            document.getElementById("card3_1").innerHTML+=` ${title}`;
            document.getElementById("card3_2").innerHTML+=` ${subscrib}`;

            })


        }
        function search4(){
var id_value=document.getElementById("inp_value_4").value;
// alert(id_value);
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${id_value}&type=&key=${youtubeKey}`).then(response =>{
                return response.json()
            }).then(data =>{
                // alert(data)
                console.log(data);
        let     title=data["items"];
        // let     vc=data["items"][0].statistics.videoCount;

        title.forEach(function(genre) {
        document.getElementById("card4_1").innerHTML+=`* ${genre.snippet.title}<br>`;
});
            })


        }
