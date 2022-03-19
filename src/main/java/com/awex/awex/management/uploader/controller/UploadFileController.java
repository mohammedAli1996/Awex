package com.awex.awex.management.uploader.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.awex.awex.management.uploader.service.FileStorage;


@RestController
public class UploadFileController {

    @Autowired 
    FileStorage fileStorage;
     
             
          
         
    @PostMapping("/upload") 
    public String uploadMultipartFile(@RequestParam("file") MultipartFile file) {
        try {
        	return fileStorage.store(file); 
        } catch (Exception e) {
          
        }
         return "pp"; 
    }

}