function validation()
{
    var ad = document.getElementById("ad").value;
    var konu = document.getElementById("konu").value;
    var eposta = document.getElementById("eposta").value;
    var mesaj = document.getElementById("mesaj").value;
    var aerror_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";


    if(ad.length <3){
        text = "Lütfen isim kısmını boş bırakmayınız!";
        error_message.innerHTML = text;
        return false;
    }   
    
    if(konu.length <3){
        text = "Lütfen konu bölümünü boş bırakmayınız!";
        error_message.innerHTML = text;
        return false;
    } 

    if(eposta.indexOf("@") == -1|| eposta.length < 4){
        text = "Lütfen geçerli bir e-posta adresi giriniz!";
        error_message.innerHTML = text;
        return false;
    } 
    if(mesaj.length <= 2){
        text = "Lütfen mesaj bölümünü boş bırakmayınız!";
        error_message.innerHTML = text;
        return false;
    }

    error_message.style.padding = "0px";

    
   alert(" Mesajınız gönderildi!")

    return true;

}
