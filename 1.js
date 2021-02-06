function hitungGaji(golongan,jenisKelamin,status,anak){
    let totalGaji = 0;
    let gajiSementara = 0;
    let gajiBersih = 0;
    let pajak = 0;
        let gaji = 0;
        let tunjangan = 0;
         
    if (golongan == "I"){
        gaji = 1500000
    }else if (golongan == "II"){
        gaji = 2000000
    }else if (golongan == "III"){
        gaji = 3000000
    }else if(golongan == "IV"){
        gaji = 4000000
    }else{
        gaji = 0
    }
    
    if (golongan == "I"){
        tunjangan = 200000
    }else if (golongan == "II"){
        tunjangan = 400000
    }else if (golongan == "III"){
        tunjangan = 600000
    }else if(golongan == "IV"){
        tunjangan = 1000000
    }else{
        tunjangan = 0
    }
    
        let tunjanganIstri = 0;
        let tunjanganAnak = 0;
    
        if (status == "menikah"){
            tunjanganIstri = 200000
        }else{
            tunjanganIstri = 0
        }
    
        if (anak == 1){
            tunjanganAnak = 100000
        }else if (anak == 2){
            tunjanganAnak = 200000
        }else{
            tunjanganAnak = 0
        }
        const pensiun = 200000;
        const BPJS = 150000;
    
       totalGaji = gaji + tunjangan + tunjanganIstri + tunjanganAnak;
       pajak = totalGaji * 10 / 100;
       gajiSementara = totalGaji - pajak
       gajiBersih = gajiSementara - pensiun - BPJS
    
    console.log("Hasil Perhitungan Gaji");
    console.log("======================");
    console.log("Info Pegawai");
    console.log("======================");
    console.log(`Golongan:${golongan}`);
    console.log(`jenis kelamin:${jenisKelamin}`);
    console.log(`jumlah Anak:${anak}`);
    console.log("======================");
    console.log("Gaji Dan Tunjangan");
    console.log("======================");
    console.log(`Gaji Pokok:${gaji}`);
    console.log(`Tunjangan:${tunjangan}`);
    console.log(`Tunjangan Istri:${tunjanganIstri}`);
    console.log(`Tunjangan Anak:${tunjanganAnak}`);
    console.log(`Total:${totalGaji}`);
    console.log(`Pajak:${pajak}`);
    console.log(`Gaji Sementara:${gajiSementara}`);
    console.log("======================");
    console.log("Gaji Bersih");
    console.log("======================");
    console.log(`Potongan Pensiun:${pensiun}`);
    console.log(`Potongan BPJS:${BPJS}`);
    console.log(`GAJI BERSIH:${gajiBersih}`);
    }
    hitungGaji("IV","laki-laki","menikah",1)