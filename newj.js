
let dt=[
    {
    Name:"Amit Safi",
    Roll_NO:"ACE/BEX/074/002",
    Address:"KTM",
    DOB:"2000-02-19",
    fun:function(){
        c=new Date()-new Date(this.DOB);
        diff=Math.floor(c/(1000*60*60*24*365.25));
        return diff;}
    },
    {
    Name:"Ram Yadav",
    Roll_NO:"ACE/BEX/074/003",
    Address:"KTM",
    DOB:"2015-05-19",
    fun:function(){
        c=new Date()-new Date(this.DOB);
        diff=Math.floor(c/(1000*60*60*24*365.25));
        return diff;}

    },
    {
    Name:"Ram rai",
    Roll_NO:"ACE/BEX/074/004",
    Address:"KTM",
    DOB:"2005-05-19",
    fun:function(){
        c=new Date()-new Date(this.DOB);
        diff=Math.floor(c/(1000*60*60*24*365.25));
        return diff;}

    }
]
console.log(dt[0].Name,dt[0].Roll_NO,dt[0].fun());
console.log(dt[1].Name,dt[1].Roll_NO,dt[1].fun());
console.log(dt[2].Name,dt[2].Roll_NO,dt[2].fun());