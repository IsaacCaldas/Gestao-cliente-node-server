class Utils{

    static dateFormat(date){
        
        if (date.getMonth() >= 0 && date.getMonth() <= 8){
            if (date.getDate() >= 1 && date.getDate() <= 9){
                if (date.getHours() >= 1 && date.getHours() <= 9){
                    if (date.getMinutes() >= 1 && date.getMinutes() <= 9){
                        return '0'+date.getDate()+'/0'+(date.getMonth()+1)+'/'+date.getFullYear()+' - 0'+date.getHours()+':0'+date.getMinutes();
                    }
                    else {
                        return '0'+date.getDate()+'/0'+(date.getMonth()+1)+'/'+date.getFullYear()+' - 0'+date.getHours()+':'+date.getMinutes();
                    }
                }
                else {
                    return '0'+date.getDate()+'/0'+(date.getMonth()+1)+'/'+date.getFullYear()+' - '+date.getHours()+':'+date.getMinutes();
                }
            }
            else {
                return date.getDate()+'/0'+(date.getMonth()+1)+'/'+date.getFullYear()+' - '+date.getHours()+':'+date.getMinutes();
            }
        }
        else if (date.getDate() >= 1 && date.getDate() <= 9){
            if (date.getHours() >= 1 && date.getHours() <= 9){
                if (date.getMinutes() >= 1 && date.getMinutes() <= 9){
                    return '0'+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' - 0'+date.getHours()+':0'+date.getMinutes();
                }
                else {
                    return '0'+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' - 0'+date.getHours()+':'+date.getMinutes();
                }
            }
            else {
                return '0'+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' - '+date.getHours()+':'+date.getMinutes();
            }
        }
        if (date.getHours() >= 1 && date.getHours() <= 9){
            if (date.getMinutes() >= 1 && date.getMinutes() <= 9){
                return +date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' - 0'+date.getHours()+':0'+date.getMinutes();
            }
            else {
                return +date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' - 0'+date.getHours()+':'+date.getMinutes();
            }
        }
        else if (date.getMinutes() >= 1 && date.getMinutes() <= 9) {
            return +date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' - '+date.getHours()+':0'+date.getMinutes();
        }
        else {
                return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' - '+date.getHours()+':'+date.getMinutes();
        }
    }
}