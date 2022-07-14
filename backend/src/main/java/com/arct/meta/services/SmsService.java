package com.arct.meta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.arct.meta.entities.Sale;
import com.arct.meta.repositories.SaleRespository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRespository saleRespository;

	public void sendSms(Long saleId) {

		Sale sale = saleRespository.findById(saleId).get();
		String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
		String msg = "Vendedor " + " " + sale.getSellerName() + 
		"foi destaque em " + date + "com total de R$"+ String.format("%.2f", sale.getAmount());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}