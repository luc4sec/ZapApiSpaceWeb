    const SERVIDOR = `http://localhost:21465`
    const apitoken = `S3c_T0k3n`
    const session = `Lucass`
    const sessionkey = `senha`
    const wh_connect = ``
    const wh_message = ``
    const wh_status = ``
    const wh_qrcode = ``


async function init(){
    var settings = {
        "url": `http://${SERVIDOR}/api/${session}/${apitoken}/generate-token`,
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": `Bearer ${sessionkey}`
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }