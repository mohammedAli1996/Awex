package com.awex.awex.management.uploader.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.stream.Stream;


public interface FileStorage {
    String store(MultipartFile file) throws IOException;

    Resource loadFile(String filename);

    void deleteAll();

    void init();

    Stream<Path> loadFiles();
}
