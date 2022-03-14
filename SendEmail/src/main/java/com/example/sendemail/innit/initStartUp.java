package com.example.sendemail.innit;
import org.springframework.boot.CommandLineRunner;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class initStartUp implements CommandLineRunner {

    private final JavaMailSender javaMailSender;
    public initStartUp( JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void run(String... args) throws Exception {
         SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("radi.gurev@gmail.com");

        msg.setSubject("Testing from Spring Boot");
        msg.setText("UGABUGA UGABUGA UGABUGA UGABUGA UGABUGA");
        javaMailSender.send(msg);
    }
}
