let cal=function(){
    c=new Date()-new Date(this.DOB);
    diff=Math.floor(c/(1000*60*60*24*365.25));
    return diff;};
let dt=[{
    Name:"Amit Safi",
    Roll_NO:"ACE/BEX/074/002",
    Address:"KTM",
    DOB:"2000-02-19",
    fun:cal
    },
    {
    Name:"Ram Yadav",
    Roll_NO:"ACE/BEX/074/003",
    Address:"KTM",
    DOB:"2015-05-19",
    fun:cal
    },
    {
    Name:"Ram rai",
    Roll_NO:"ACE/BEX/074/004",
    Address:"KTM",
    DOB:"2005-05-19",
    fun:cal
}
]
for( var i=0;i<3;i++)
{
    console.log(dt[i].Name,dt[i].Roll_NO,dt[i].fun());
}
