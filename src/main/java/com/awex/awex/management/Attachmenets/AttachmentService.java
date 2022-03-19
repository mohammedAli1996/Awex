package com.awex.awex.management.Attachmenets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List; ; 

@Service
public class AttachmentService {

	
	@Autowired
	private AttachmentRepository attachmentRepository ; 
	
	
	public Attachment saveAttachment(String path, String type ) {
		Attachment attachment = new Attachment()
				.setPath(path)
				.setType(type);
		return attachmentRepository.save(attachment);
	}
	  
	public List<Attachment> findByParentAndTypeAndSection(int parentId , String type ,String section){
		List<Attachment> result = new ArrayList<Attachment>();
		List<Attachment> att  = attachmentRepository.findAll();
		System.out.println(att.size());
		for(Attachment attachment : att) {
			if(attachment.getParentId() == parentId) {
				if(attachment.getType().equalsIgnoreCase(type)) {
						result.add(attachment);
				}
			}
		}
		return result;
	}
	
}
