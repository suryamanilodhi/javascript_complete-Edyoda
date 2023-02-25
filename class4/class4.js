var a=prompt("enter  month");
if(a=="january"||a=="march"||a=="may"||a=="july"||a=="august"||a=="october"||a=="december"){
    document.write(a+" month has 31 days");
}
else if(a=="ferbuary"){
    document.write(a+" months has 28 days")
}
else if(a=="april"||a=="june"||a=="september"||a=="novbembe"){
    document.write(" months has 30 days")
}
else{
      document.write(" enter correct months")
}