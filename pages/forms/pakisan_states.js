var countries = Object();

countries.Pakistan = "|Islamabad||Balochistan|Federally Administered Tribal Areas|North-West Frontier Province|Punjab|Sindh";


var city_states = Object();

city_states.Pakistan = "|Islamabad|Balochistan|Federally Administered Tribal Areas|North-West Frontier Province|Punjab|Sindh";

var city = Object();

city.Islamabad = "|Islamabad";
city.Balochistan= "|Quetta |Khuzdar";
city.Sindh= "|Sakhar |Larkana|Hyderabad|Nawabshah |Jacobabad";
city.Punjab= "|Sarghoda|Sialkot|Bahawalpur|Gujrat|Kasur|Sahiwal|Okara|Faisalabad|Lahore|Multan|Chiniot|Jhelum|Khanewal|hafiz Hafizabad|Muzaffargarh|Chishtian|Diska|Bahawalpur";

function setRegions()
{
    for (region in countries)
    {
        document.write('<option value="' + region + '">' + region + "</option>")
    }
}



function set_country(e, b, a)
{
    var c;
    b.length = 0;
    a.length = 0;
    var f = e.options[e.selectedIndex].text;
    if (countries[f])
    {
        b.disabled = false;
        a.disabled = true;
        b.options[0] = new Option("Select Country", "");
        c = countries[f].split("|");
        for (var d = 0; d < c.length; d++)
        {
            b.options[d + 1] = new Option(c[d], c[d])
        }
        document.getElementById("txtregion").innerHTML = f;
        document.getElementById("txtplacename").innerHTML = ""
    }
    else
    {
        b.disabled = true
    }
}

function set_city_state(b, a)
{
    var d;
    a.length = 0;
    var e = b.options[b.selectedIndex].text;
    if (city[e])
    {
        a.disabled = false;
        a.options[0] = new Option("Select State", "");
        d = city[e].split("|");
        for (var c = 0; c < d.length; c++)
        {
            a.options[c + 1] = new Option(d[c], d[c])
        }
        document.getElementById("txtplacename").innerHTML = e
    }
    else
    {
        a.disabled = true
    }
}

function print_city_state(b, a)
{
    var d = b.options[b.selectedIndex].text;
    var c = a.options[a.selectedIndex].text;
    if (c && city_states[d].indexOf(c) != -1)
    {
        document.getElementById("txtplacename").innerHTML = c + ", " + d
    }
    else
    {
        document.getElementById("txtplacename").innerHTML = d
    }
};
