(function(zonevars) {
	var zonemasters = zonevars.zonemasters;
	var top_loc=null,top_href="",top_hash="";
	function getQueryHash() {
		top_hash = (top_hash=top_href.match(/[\?\&]cpmstarhash=([^\&\#]*)/))==null?"":"#"+top_hash[1];		
	}
	try { top_loc=window.top.location; top_href=top_loc.href; top_hash=top_loc.hash; } catch(err) {
		var top_win = window;
		try { while (top_win.parent && top_win.parent.document !== top_win.document && top_win.parent.document.location.href) { top_win = top_win.parent; } } catch(e) {}		
		try { top_loc = top_win.location; top_href = top_loc.href; } catch(e) {}
		getQueryHash();
	}
	if(!top_hash) getQueryHash();

    var x=(10+((x*7)%26)).toString(36)+(x=window.location.href.split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>1},0));
	var y=window.location.href.split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>1},0);y=(10+((y*7)%26)).toString(36)+y.toString(36);
	var z=window.location.href.split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>0},0);z=(10+((z*7)%26)).toString(36)+z.toString(36);
	var q=window.location.href.split('#')[0].split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>1},0);q=(10+((q*7)%26)).toString(36)+q.toString(36);
	var cpmstarx="cpmstarx";
	if(window[x]) window[y] = window[x];
	if(window[y]) window[z] = window[y];
	if(window[z]) window[q] = window[z];
	if(window[q]) window[cpmstarx] = window[q];
    
    var dev = top_hash == "#cpmstarDev";
	var staging = (top_hash == "#cpmstarStaging" || top_hash == "#urlzing");
	if(typeof window[cpmstarx]!=="object") window[x] = window[y] = window[z] = window[q] = window[cpmstarx] = {};
	
	if(typeof(window[cpmstarx].zonevars)==="object") return;
	window[cpmstarx].zonevars = zonevars;

	var ver = "1309";
	window[cpmstarx].zonevars.ver = ver;


	if(top_hash == "#urlzing") {
		var qs = new URLSearchParams(window.location.search);
		if(qs.has('cpmstarDev')) {
			dev = true;
		}
	}

	for(var i=0; i<zonemasters.length; i++) { //Insert all the zonemasters
		var zonemasterobj = (typeof zonemasters[i]==="string")?{path:'/cached/zonemasters/'+zonemasters[i]}:zonemasters[i];

		var s = document.createElement('script'); 
		s.type = 'text/javascript'; 
		s.async = true;
		
		var proto = (window.location.protocol == "http:")?"http:":"https:";
		if(zonemasterobj.host == null) {            
			if(dev) zonemasterobj.host = "dev.server.cpmstar.com";
			else if(staging) zonemasterobj.host = "staging.server.cpmstar.com";
			else if(proto == "https:") zonemasterobj.host = "ssl.cdne.cpmstar.com";
			else zonemasterobj.host = "cdn.cpmstar.com";
		}else{
			if(staging) {
				if(zonevars.jbcheck) zonevars.jbcheck.host = "staging.urlzing.com";				
				zonemasterobj.host = "staging.urlzing.com"; 				
			}
		}
		
		s.src = proto + "//" + zonemasterobj.host + zonemasterobj.path + "?ver="+ver;
		var s2=document.getElementsByTagName('script')[0];
		s2.parentNode.insertBefore(s, s2);
	}
})(
{
  "zonemasters": [
    "mobilemodules.js",
    {
      "path": "/cached/zonemasters/cpmstarjsgameapi.js",
      "api": "game"
    }
  ],
  "requests": {
    "hb": {
      "kind": "hb",
      "pbjsfile": "starprebid.js",
      "PREBID_TIMEOUT": 3000,
      "adUnits": [
        {
          "bids": [
            {
              "bidder": "consumable",
              "params": {
                "unitId": "6864",
                "unitName": "cnsmbl-audio-300x250-slider",
                "zoneIds": [
                  2002342
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 446168,
              "campaignids": {
                "300x250": 446168
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "18645471"
              },
              "campaignid": 455731,
              "campaignids": {
                "300x250": 455731
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "bXW-HqxwSr6OkEaKlId8sQ",
                "productId": "siab"
              },
              "campaignid": 455754,
              "campaignids": {
                "300x250": 455754
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "afwf6Mxw0r6OkLaKkGJozW",
                "productId": "siab"
              },
              "campaignid": 456022,
              "campaignids": {
                "300x250": 456022
              },
              "discrep": 1.3160258520135257,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "richaudience",
              "params": {
                "pid": "yrKxPiLDl3",
                "supplyType": "site"
              },
              "campaignid": 456034,
              "campaignids": {
                "300x250": 456034
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696393"
              },
              "campaignid": 456216,
              "campaignids": {
                "300x250": 456216
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696393"
              },
              "campaignid": 456632,
              "campaignids": {
                "300x250": 456632
              },
              "discrep": 0.6667789684982881,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541079638"
              },
              "campaignid": 458586,
              "campaignids": {
                "300x250": 458586
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "consumable",
              "params": {
                "unitId": "9449",
                "unitName": "cnsmbl-audio-300x250-slider",
                "zoneIds": [
                  2004508
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 459284,
              "campaignids": {
                "300x250": 459284
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "consumable",
              "params": {
                "unitId": "9453",
                "unitName": "cnsmbl-audio-300x250-slider",
                "zoneIds": [
                  2004504
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 459285,
              "campaignids": {
                "300x250": 459285
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 459745,
              "campaignids": {
                "300x250": 459745
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 213686
              },
              "campaignid": 461413,
              "campaignids": {
                "300x250": 461413
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "779213"
              },
              "campaignid": 462171,
              "campaignids": {
                "300x250": 462171
              },
              "discrep": 70.4480762126979,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "51360",
                "ip": "%%IP%%"
              },
              "campaignid": 464192,
              "campaignids": {
                "300x250": 464192
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "testpb=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379387"
              },
              "campaignid": 464864,
              "campaignids": {
                "300x250": 464864
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "469216",
              "campaignids": {
                "300x250": 469216
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "nqm1g8TDr451ef7cr45Z6CnT"
              },
              "campaignid": "469230",
              "campaignids": {
                "300x250": 469230
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "66559",
                "ip": "%%IP%%"
              },
              "campaignid": 470046,
              "campaignids": {
                "300x250": 470046
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471569,
              "campaignids": {
                "300x250": 471569
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "473432"
                }
              },
              "campaignid": "473432",
              "campaignids": {
                "300x250": 473432
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606535,
                "cur": "USD"
              },
              "campaignid": 478457,
              "campaignids": {
                "300x250": 478457
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480645,
              "campaignids": {
                "300x250": 480645
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "438754"
              },
              "campaignid": 480883,
              "campaignids": {
                "300x250": 480883
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "conversant",
              "params": {
                "site_id": "59a04dd",
                "secure": 1
              },
              "campaignid": 490848,
              "campaignids": {
                "300x250": 490848
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  300,
                  250
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83023
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$83023",
          "gamFilters": [
            {
              "type": "Country",
              "data": "WORLDWIDE",
              "exclude": true
            },
            {
              "type": "Domain",
              "data": "1v1.lol",
              "exclude": false
            },
            {
              "type": "Domain",
              "data": "1v1.school",
              "exclude": false
            },
            {
              "type": "Param",
              "data": "gampb=1",
              "exclude": true
            },
            {
              "type": "Param",
              "data": "json=c_o",
              "exclude": true
            }
          ],
          "gamAdUnitCode": "3425874455",
          "gamCampaignid": 455742,
          "gamPageUrl": "1v1.lol",
          "gamDiscrep": 0.697897346372257,
          "gamDiscrepGross": 12.874104000000003,
          "gamDiscrepLocalGross": 18.446988037597414
        },
        {
          "bids": [
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "18645477"
              },
              "campaignid": 455733,
              "campaignids": {
                "728x90": 455733
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "d0-TeqxwWr6OkLaKkGJozW",
                "productId": "siab"
              },
              "campaignid": 455753,
              "campaignids": {
                "728x90": 455753
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "richaudience",
              "params": {
                "pid": "eVtanNpLSG",
                "supplyType": "site"
              },
              "campaignid": 456036,
              "campaignids": {
                "728x90": 456036
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696395"
              },
              "campaignid": 456633,
              "campaignids": {
                "728x90": 456633
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541079637"
              },
              "campaignid": 458533,
              "campaignids": {
                "728x90": 458533
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "consumable",
              "params": {
                "unitId": "9450",
                "unitName": "cnsmbl-audio-728x90-slider",
                "zoneIds": [
                  2004507
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 459283,
              "campaignids": {
                "728x90": 459283
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 459730,
              "campaignids": {
                "728x90": 459730
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "779214"
              },
              "campaignid": 462172,
              "campaignids": {
                "728x90": 462172
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "728",
                "height": "90",
                "placementId": "51361",
                "ip": "%%IP%%"
              },
              "campaignid": 463582,
              "campaignids": {
                "728x90": 463582
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "467467",
              "campaignids": {
                "728x90": 467467
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "ZnH52eCTic2Cjqud4sKo3fAb"
              },
              "campaignid": "469229",
              "campaignids": {
                "728x90": 469229
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "728",
                "height": "90",
                "placementId": "66555",
                "ip": "%%IP%%"
              },
              "campaignid": 470045,
              "campaignids": {
                "728x90": 470045
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  728,
                  90
                ],
                [
                  970,
                  90
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83024
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$83024"
        },
        {
          "bids": [
            {
              "bidder": "consumable",
              "params": {
                "unitId": "6864",
                "unitName": "cnsmbl-audio-300x250-slider",
                "zoneIds": [
                  2002342
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 446168,
              "campaignids": {
                "300x250": 446168
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "18645475"
              },
              "campaignid": 455732,
              "campaignids": {
                "300x250": 455732
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "bXW-HqxwSr6OkEaKlId8sQ",
                "productId": "siab"
              },
              "campaignid": 455754,
              "campaignids": {
                "300x250": 455754
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "richaudience",
              "params": {
                "pid": "1mHcln6Ptx",
                "supplyType": "site"
              },
              "campaignid": 456035,
              "campaignids": {
                "300x250": 456035
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696394"
              },
              "campaignid": 456217,
              "campaignids": {
                "300x250": 456217
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696394"
              },
              "campaignid": 456631,
              "campaignids": {
                "300x250": 456631
              },
              "discrep": 0.47115654554636954,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541079862"
              },
              "campaignid": 458585,
              "campaignids": {
                "300x250": 458585
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 459746,
              "campaignids": {
                "300x250": 459746
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 213686
              },
              "campaignid": 461414,
              "campaignids": {
                "300x250": 461414
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "779212"
              },
              "campaignid": 462170,
              "campaignids": {
                "300x250": 462170
              },
              "discrep": 76.31370983521501,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "51360",
                "ip": "%%IP%%"
              },
              "campaignid": 463596,
              "campaignids": {
                "300x250": 463596
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "testpb=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379387"
              },
              "campaignid": 464864,
              "campaignids": {
                "300x250": 464864
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "467468",
              "campaignids": {
                "300x250": 467468
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "xWuTnHmReWxpGqvWaMNiNwdZ"
              },
              "campaignid": "469231",
              "campaignids": {
                "300x250": 469231
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "66559",
                "ip": "%%IP%%"
              },
              "campaignid": 470046,
              "campaignids": {
                "300x250": 470046
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471569,
              "campaignids": {
                "300x250": 471569
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "473432"
                }
              },
              "campaignid": "473432",
              "campaignids": {
                "300x250": 473432
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606535,
                "cur": "USD"
              },
              "campaignid": 478457,
              "campaignids": {
                "300x250": 478457
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480645,
              "campaignids": {
                "300x250": 480645
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "438754"
              },
              "campaignid": 480883,
              "campaignids": {
                "300x250": 480883
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "conversant",
              "params": {
                "site_id": "59a04dd",
                "secure": 1
              },
              "campaignid": 490850,
              "campaignids": {
                "300x250": 490850
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  300,
                  250
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83025,
            "width": 300,
            "height": 250
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$83025",
          "gamFilters": [
            {
              "type": "Country",
              "data": "WORLDWIDE",
              "exclude": true
            },
            {
              "type": "Domain",
              "data": "1v1.lol",
              "exclude": false
            },
            {
              "type": "Domain",
              "data": "1v1.school",
              "exclude": false
            },
            {
              "type": "Param",
              "data": "gampb=1",
              "exclude": true
            },
            {
              "type": "Param",
              "data": "json=c_o",
              "exclude": true
            }
          ],
          "gamAdUnitCode": "3425874456",
          "gamCampaignid": 455743,
          "gamPageUrl": "1v1.lol",
          "gamDiscrep": 0.5363439802923928,
          "gamDiscrepGross": 40.002541,
          "gamDiscrepLocalGross": 74.58374190793052
        },
        {
          "bids": [
            {
              "bidder": "richaudience",
              "params": {
                "pid": "1bbvqWFkTF",
                "supplyType": "site"
              },
              "campaignid": 456641,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 213686
              },
              "campaignid": 461489,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "51474",
                "ip": "%%IP%%"
              },
              "campaignid": 463580,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "rtb": 1,
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541166423",
                "video": {
                  "mimes": [
                    "application/javascript",
                    "video/mp4"
                  ]
                }
              },
              "campaignid": 464854,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379390@0x0",
                "video": {
                  "mimes": [
                    "video/mp4",
                    "video/ogg",
                    "video/webm",
                    "application/javascript"
                  ],
                  "skippable": true,
                  "playbackmethod": [
                    1,
                    2
                  ],
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "playback_method": [
                    "auto_play_sound_on",
                    "auto_play_sound_off"
                  ],
                  "linearity": 1,
                  "maxduration": 30,
                  "startdelay": 0,
                  "placement": 1,
                  "api": [
                    1,
                    2
                  ]
                }
              },
              "campaignid": 464866,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986",
                "sizes": [
                  201
                ],
                "video": {
                  "language": "en",
                  "minduration": 0,
                  "maxduration": 30,
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "startdelay": 0,
                  "mimes": [
                    "video/mp4",
                    "application/javascript"
                  ],
                  "linearity": 1,
                  "api": [
                    1,
                    2
                  ],
                  "boxingallowed": 1,
                  "pos": 1
                }
              },
              "campaignid": "467492",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "Ay05RVeSmGzBBZJlp8Ne0DMR"
              },
              "campaignid": "469232",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "66556",
                "ip": "%%IP%%"
              },
              "campaignid": 470043,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "debug=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "67179",
                "ip": "%%IP%%"
              },
              "campaignid": 470175,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471584,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "26615007"
              },
              "campaignid": 478305,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606576,
                "cur": "USD"
              },
              "campaignid": 479357,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480647,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "956651"
              },
              "campaignid": 483696,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "conversant",
              "params": {
                "site_id": "e74ed6f",
                "secure": 1
              },
              "campaignid": 490852,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "490973"
                }
              },
              "campaignid": "490973",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "cuEn6aM2Cr7OohrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 491709,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "video": {
              "placement": 1,
              "playerSize": [
                960,
                540
              ],
              "w": 960,
              "h": 540,
              "context": "instream",
              "pos": 1,
              "api": [
                2,
                2
              ],
              "protocols": [
                1,
                2,
                3,
                6
              ],
              "mimes": [
                "video/ogg",
                "video/webm",
                "video/mp4",
                "application/javascript"
              ],
              "minduration": 0,
              "maxduration": 30,
              "linearity": 1,
              "startdelay": 1
            }
          },
          "fallback": {
            "kind": "video",
            "poolid": 83026,
            "vast": true,
            "w": 960,
            "h": 540
          },
          "minBid": {
            "1v1.school": -1,
            "default": 8
          },
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "video": 0
            }
          },
          "code": "instream",
          "gamPageUrl": "1v1.lol",
          "forceFallback": true
        },
        {
          "bids": [],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  728,
                  90
                ],
                [
                  800,
                  100
                ],
                [
                  970,
                  90
                ],
                [
                  320,
                  50
                ],
                [
                  300,
                  50
                ],
                [
                  216,
                  36
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83028
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "anchor"
        },
        {
          "bids": [
            {
              "bidder": "consumable",
              "params": {
                "unitId": "6863",
                "unitName": "cnsmbl-audio-728x90-slider",
                "zoneIds": [
                  2002341
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 446167,
              "campaignids": {
                "728x90": 446167
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "consumable",
              "params": {
                "unitId": "6864",
                "unitName": "cnsmbl-audio-300x250-slider",
                "zoneIds": [
                  2002342
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 446168,
              "campaignids": {
                "300x250": 446168
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "auD08Exw0r6ROqaKkv7mNO",
                "productId": "siab"
              },
              "campaignid": 455756,
              "campaignids": {
                "728x90": 455756
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "justbuild.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "conversant",
              "params": {
                "site_id": "201250",
                "secure": 1
              },
              "campaignid": 456041,
              "campaignids": {
                "300x250": 456041
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "richaudience",
              "params": {
                "pid": "JkL2SdNsgc",
                "supplyType": "site"
              },
              "campaignid": 465391,
              "campaignids": {
                "970x250": 465391
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "543845676"
              },
              "campaignid": 465403,
              "campaignids": {
                "970x250": 465403
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "conversant",
              "params": {
                "site_id": "201250",
                "secure": 1
              },
              "campaignid": 465407,
              "campaignids": {
                "970x250": 465407
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "consumable",
              "params": {
                "unitId": "10955",
                "unitName": "cnsmbl-audio-responsive",
                "zoneIds": [
                  2005899
                ],
                "siteId": "2000865",
                "networkId": "9969"
              },
              "campaignid": 468263,
              "campaignids": {
                "970x250": 468263
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "oglaszamy24.pl",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "66559",
                "ip": "%%IP%%"
              },
              "campaignid": 470046,
              "campaignids": {
                "300x250": 470046
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  728,
                  90
                ],
                [
                  300,
                  250
                ],
                [
                  970,
                  90
                ],
                [
                  970,
                  250
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 84818
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$84818"
        },
        {
          "bids": [
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "20800872"
              },
              "campaignid": 465398,
              "campaignids": {
                "300x600": 465398
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "richaudience",
              "params": {
                "pid": "mkAOGWLhUQ",
                "supplyType": "site"
              },
              "campaignid": 470068,
              "campaignids": {
                "300x600": 470068
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 213686
              },
              "campaignid": 470069,
              "campaignids": {
                "300x600": 470069
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "470070",
              "campaignids": {
                "300x600": 470070
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 470071,
              "campaignids": {
                "300x600": 470071
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "911884"
              },
              "campaignid": 470074,
              "campaignids": {
                "300x600": 470074
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "fJuIUmdryDTCVw2fQc8EVJ1X"
              },
              "campaignid": "470077",
              "campaignids": {
                "300x600": 470077
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3731916"
              },
              "campaignid": 470091,
              "campaignids": {
                "300x600": 470091
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "600",
                "placementId": "67111",
                "ip": "%%IP%%"
              },
              "campaignid": 470149,
              "campaignids": {
                "300x600": 470149
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "testpb=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 470208,
              "campaignids": {
                "300x600": 470208
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "473433"
                }
              },
              "campaignid": "473433",
              "campaignids": {
                "300x600": 473433
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "600",
                "placementId": "78975",
                "ip": "%%IP%%"
              },
              "campaignid": 474918,
              "campaignids": {
                "300x600": 474918
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606537,
                "cur": "USD"
              },
              "campaignid": 478458,
              "campaignids": {
                "300x600": 478458
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480644,
              "campaignids": {
                "300x600": 480644
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "438755"
              },
              "campaignid": 480884,
              "campaignids": {
                "300x600": 480884
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "559618501"
              },
              "campaignid": 487698,
              "campaignids": {
                "300x600": 487698
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "conversant",
              "params": {
                "site_id": "0b2e157",
                "secure": 1
              },
              "campaignid": 490853,
              "campaignids": {
                "300x600": 490853
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "cC44ByM2Cr7OohrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 491710,
              "campaignids": {
                "300x600": 491710
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  300,
                  600
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 85420,
            "width": 300,
            "height": 600
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$85420",
          "gamFilters": [
            {
              "type": "Country",
              "data": "United States",
              "exclude": true
            },
            {
              "type": "Country",
              "data": "WORLDWIDE",
              "exclude": true
            },
            {
              "type": "Domain",
              "data": "1v1.lol",
              "exclude": false
            },
            {
              "type": "Domain",
              "data": "1v1.school",
              "exclude": false
            },
            {
              "type": "Param",
              "data": "gampb=1",
              "exclude": true
            },
            {
              "type": "Param",
              "data": "json=c_o",
              "exclude": true
            }
          ],
          "gamAdUnitCode": "1v1300x600New",
          "gamCampaignid": 486803,
          "gamPageUrl": "1v1.lol",
          "gamDiscrep": 0.4263005156905433,
          "gamDiscrepGross": 10.348479999999997,
          "gamDiscrepLocalGross": 24.27508205857317
        },
        {
          "bids": [
            {
              "bidder": "richaudience",
              "params": {
                "pid": "1bbvqWFkTF",
                "supplyType": "site"
              },
              "campaignid": 456641,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541166571",
                "video": {
                  "mimes": [
                    "application/javascript",
                    "video/mp4"
                  ]
                }
              },
              "campaignid": 459915,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 213686
              },
              "campaignid": 461489,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "51474",
                "ip": "%%IP%%"
              },
              "campaignid": 463580,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "rtb": 1,
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541166423",
                "video": {
                  "mimes": [
                    "application/javascript",
                    "video/mp4"
                  ]
                }
              },
              "campaignid": 464854,
              "campaignids": {},
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379390@0x0",
                "video": {
                  "mimes": [
                    "video/mp4",
                    "video/ogg",
                    "video/webm",
                    "application/javascript"
                  ],
                  "skippable": true,
                  "playbackmethod": [
                    1,
                    2
                  ],
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "playback_method": [
                    "auto_play_sound_on",
                    "auto_play_sound_off"
                  ],
                  "linearity": 1,
                  "maxduration": 30,
                  "startdelay": 0,
                  "placement": 1,
                  "api": [
                    1,
                    2
                  ]
                }
              },
              "campaignid": 464866,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986",
                "sizes": [
                  201
                ],
                "video": {
                  "language": "en",
                  "minduration": 0,
                  "maxduration": 30,
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "startdelay": 0,
                  "mimes": [
                    "video/mp4",
                    "application/javascript"
                  ],
                  "linearity": 1,
                  "api": [
                    1,
                    2
                  ],
                  "boxingallowed": 1,
                  "pos": 1
                }
              },
              "campaignid": "467492",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "Ay05RVeSmGzBBZJlp8Ne0DMR"
              },
              "campaignid": "469232",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "66556",
                "ip": "%%IP%%"
              },
              "campaignid": 470043,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "debug=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "67179",
                "ip": "%%IP%%"
              },
              "campaignid": 470175,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471584,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "26615007"
              },
              "campaignid": 478305,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480647,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "956651"
              },
              "campaignid": 483696,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "conversant",
              "params": {
                "site_id": "e74ed6f",
                "secure": 1
              },
              "campaignid": 490852,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "490973"
                }
              },
              "campaignid": "490973",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "cuEn6aM2Cr7OohrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 491709,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "video": {
              "placement": 1,
              "playerSize": [
                960,
                540
              ],
              "w": 960,
              "h": 540,
              "context": "instream",
              "pos": 1,
              "api": [
                2,
                2
              ],
              "protocols": [
                1,
                2,
                3,
                6
              ],
              "mimes": [
                "video/mp4",
                "application/javascript"
              ],
              "minduration": 0,
              "maxduration": 60,
              "linearity": 1,
              "startdelay": 1
            }
          },
          "fallback": {
            "kind": "video",
            "poolid": 87004,
            "vast": true,
            "w": 960,
            "h": 540
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "video": 0
            }
          },
          "code": "rewarded",
          "gamPageUrl": "1v1.lol"
        }
      ],
      "PREBID_SERVER": true,
      "PREBID_SERVER_BIDDERS": [
        "onetag"
      ],
      "FALLBACK_BID_MULITPLIER": 0,
      "GAM": true,
      "GAMCHILDNETWORKCODE": "21834398356",
      "GAMFILTERS": false,
      "FAILSAFE_TIMEOUT": 3500,
      "publisherid": 49986,
      "bidderDiscreps": {
        "richaudience": {
          "tagperadunit": true,
          "totalgross": 0.01,
          "totallocalgross": 0.01,
          "discrep": 1
        },
        "openx": {
          "tagperadunit": true,
          "totalgross": 106.26292000000001,
          "totallocalgross": 91.14628395801039,
          "discrep": 1.1658502726118116
        },
        "unruly": {
          "tagperadunit": false,
          "totalgross": 15.479999999999999,
          "totallocalgross": 9.657828917542938,
          "discrep": 1.6028447109765418
        },
        "awesomeads": {
          "tagperadunit": false,
          "totalgross": 284.322,
          "totallocalgross": 193.60606317847964,
          "discrep": 1.4685593794544134
        },
        "pubmatic": {
          "tagperadunit": false,
          "totalgross": 1.31,
          "totallocalgross": 9.473456976227462,
          "discrep": 1
        },
        "rubicon": {
          "tagperadunit": false,
          "totalgross": 18.627640000000003,
          "totallocalgross": 216.3711504672042,
          "discrep": 0.0860911445901076
        },
        "sharethrough": {
          "tagperadunit": false,
          "totalgross": 0.0662906,
          "totallocalgross": 0.026104000504128637,
          "discrep": 2.539480490337694
        },
        "nobid": {
          "tagperadunit": false,
          "totalgross": 1385.3704400000001,
          "totallocalgross": 1188.6809149420794,
          "discrep": 1.16546873310194
        },
        "appnexus": {
          "tagperadunit": true,
          "totalgross": 0.070063,
          "totallocalgross": 0.48954601494177497,
          "discrep": 0.14311831342010428
        },
        "eplanning": {
          "tagperadunit": false,
          "totalgross": 441.13,
          "totallocalgross": 380.16707855309835,
          "discrep": 1.1603582342766876
        },
        "gumgum": {
          "tagperadunit": false,
          "totalgross": 87.42999999999999,
          "totallocalgross": 25.71995383569971,
          "discrep": 3.3993062568660504
        },
        "conversant": {
          "tagperadunit": true,
          "totalgross": 87.42999999999999,
          "totallocalgross": 25.71995383569971,
          "discrep": 1
        },
        "onetag": {
          "tagperadunit": false,
          "totalgross": 87.42999999999999,
          "totallocalgross": 25.71995383569971,
          "discrep": 1
        },
        "33across": {
          "tagperadunit": true,
          "totalgross": 87.42999999999999,
          "totallocalgross": 25.71995383569971,
          "discrep": 1
        }
      }
    },
    "banner300x250": {
      "kind": "banner",
      "poolid": 83025
    },
    "instream": {
      "kind": "json",
      "vast": true,
      "poolid": 83026
    },
    "bypassanchor": {
      "kind": "editorial",
      "multi": "7",
      "json": "nc_editorial",
      "css": "h1{margin:0}.box,h1{font-weight:700}h1{color:#69b8ee;border-bottom:1px solid #69b8ee;line-height:1.5em;font-size:18px;font-family:Helvetica,Arial,sans-serif}body .box:last-child{margin-right:0}.box{box-shadow: #0000008a 3px 3px 1px 4px; position:relative;width:100px;height:100px;display:inline-block;vertical-align:text-bottom;margin:0 12px 12px 0;color:#000;text-decoration:none;font-size:14px;font-family:helvetica;overflow:hidden;border-radius:15px}.cpmstar-editorial-image{height:100px;width:100px;background-color:green;margin:auto} .box:hover{ cursor: pointer;} .box:hover .cpmstar-editorial-image{transform:scale(1.2);transition:.33s ease-in-out}.cpmstar-editorial-title{height:30%;bottom:0;left:0;position:absolute;z-index:1;display:block;font-family:helvetica;font-size:11px;line-height:14px;font-weight:500;background-color:rgba(0,125,179,.8);color:#fff;padding-top:2px;text-align:center;width:100%}.editorial_container{margin-left:35px}  a:nth-child(odd) div.cpmstar-editorial-title {background-color:darkcyan;}",
      "template": "{{~it.creatives :creative:index}} <a style=\"display:inline-block; border-bottom:none;\" href=\"{{=creative.clickUrl}}\" target=\"_blank\" class=\"box\"> <div class=\"imagebox\"> <img src=\"{{=creative.imageUrl}}\" height=\"100\" width=\"100\" class=\"cpmstar-editorial-image\"> </div> <div class=\"cpmstar-editorial-title\"> {{=creative.title}} </div> </a>{{~}}",
      "options": {
        "thumbWidth": 100,
        "thumbHeight": 100,
        "imageHeight": 100,
        "imageWidth": 100
      },
      "style": {
        "height": 105,
        "width": 810
      },
      "poolid": 83027
    },
    "anchor": {
      "kind": "banner",
      "poolid": 83028
    },
    "bypassvideo": {
      "kind": "editorial",
      "json": "nc_editorial",
      "multi": "1",
      "options": {
        "width": "348px",
        "height": "348px",
        "thumbWidth": 100,
        "thumbHeight": 100,
        "imageHeight": 100,
        "imageWidth": 100
      },
      "requiredmacros": "IMAGE800X288|IMAGE180X100",
      "style": {
        "width": "348px",
        "height": "348px"
      },
      "css": {},
      "template": "<h1>Brought to you by some dudes!</h1>",
      "poolid": 83029
    },
    "banner300x600": {
      "kind": "banner",
      "poolid": 85420
    },
    "rewarded": null
  },
  "modules": [
    {
      "kind": "banner",
      "info": {
        "name": "POOL 83023"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$83023"
        }
      },
      "options": {
        "maxHeight": 250,
        "refreshrate": 40000,
        "autorefresh": false,
        "timeslice": 1,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$83023"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 83024"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$83024"
        }
      },
      "options": {
        "maxHeight": 90,
        "refreshrate": 40000,
        "autorefresh": false,
        "timeslice": 1,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$83024"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 83025"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$83025"
        }
      },
      "options": {
        "maxHeight": 250,
        "refreshrate": 40000,
        "autorefresh": false,
        "timeslice": 1,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$83025"
    },
    {
      "kind": "banner",
      "info": {
        "name": "anchor"
      },
      "conditions": [
        {
          "wait": true,
          "jbStatus": [
            "0",
            "1"
          ],
          "request": "hb"
        },
        {
          "wait": true,
          "jbStatus": "2",
          "request": "bypassanchor"
        }
      ],
      "options": {
        "maxHeight": 100
      },
      "request": "hb",
      "adUnitPath": "anchor",
      "blueprint": "hybridanchor"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 84818"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$84818"
        }
      },
      "options": {
        "maxHeight": 250
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$84818"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 85420"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$85420"
        }
      },
      "options": {
        "maxHeight": 600,
        "refreshrate": 40000,
        "autorefresh": false,
        "timeslice": 1,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$85420"
    },
    {
      "info": {
        "name": "banner300x250"
      },
      "kind": "banner",
      "request": "hb",
      "adUnitPath": "banner300x250",
      "conditions": {
        "wait": true
      },
      "options": {
        "width": 300,
        "height": 250
      }
    },
    {
      "info": {
        "name": "banner728x90"
      },
      "kind": "banner",
      "request": "hb",
      "adUnitPath": "banner728x90",
      "conditions": {
        "wait": true
      },
      "options": {
        "width": 728,
        "height": 90
      }
    },
    {
      "info": {
        "name": "preroll"
      },
      "blueprint": "instreamvideo",
      "request": "hb",
      "adUnitPath": "instream",
      "options": {
        "requireViewable": false,
        "autoSizeToTarget": true,
        "clickToPlay": true,
        "autoSkippability": true,
        "forceSkippability": true
      },
      "conditions": [
        {
          "wait": true,
          "gap": 60000
        }
      ],
      "css": {
        ".cpmsvideoclosebanner:after": {
          "content": "'Start Game'"
        }
      }
    },
    {
      "conditions": [
        {
          "wait": true,
          "gap": 60000
        }
      ],
      "info": {
        "name": "interstitial"
      },
      "blueprint": "hybridinstreamvideo",
      "options": {
        "autoSkippability": true,
        "forceSkippability": true
      }
    },
    {
      "conditions": {
        "wait": true
      },
      "info": {
        "name": "rewardedvideo"
      },
      "blueprint": "instreamvideo",
      "request": "hb",
      "adUnitPath": "rewarded",
      "options": {
        "autoSkippability": false
      }
    }
  ],
  "conditions": {
    "geo": [
      {
        "exclude": true,
        "countryCode": [
          "kp",
          "ir",
          "sy",
          "cu",
          "lb"
        ]
      },
      {
        "exclude": true,
        "region": [
          "donetsk",
          "crimea",
          "luhansk",
          "donetsk oblast"
        ]
      },
      {
        "exclude": true,
        "city": [
          "donetsk",
          "crimea",
          "luhansk"
        ]
      }
    ]
  },
  "options": {
    "coppa": 1,
    "referrerRevshare": 1
  },
  "info": {
    "id": 372,
    "tags": [
      57
    ],
    "zonepools": {
      "83023": {
        "module": "POOL 83023"
      },
      "83024": {
        "module": "POOL 83024"
      },
      "83025": {
        "module": "POOL 83025"
      },
      "83026": {
        "module": "preroll"
      },
      "83028": {
        "module": "anchor"
      },
      "84818": {
        "module": "POOL 84818"
      },
      "85420": {
        "module": "POOL 85420"
      },
      "87004": {
        "module": "rewardedvideo"
      }
    }
  }
}
);