package com.example.javatojavascriptreader.web;

import com.example.javatojavascriptreader.Repository.DataRepository;
import com.example.javatojavascriptreader.model.Data;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@Controller
public class HomeController {

    private final DataRepository dataRepository;

    public HomeController(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    public String getGrades(){
        List<Data> dataList = dataRepository.findAll();

        JsonArray categories = new JsonArray();
        JsonArray series = new JsonArray();
        JsonObject jo = new JsonObject();
        dataList.forEach(data->{
            categories.add(data.getCategory());
            series.add(data.getSeries());
        });


        jo.add("categories",categories);
        jo.add("series",series);
        return jo.toString();
    }
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("grades",getGrades());
        return "index";
    }

  /*  @GetMapping("/")
    @ResponseBody
    public String getData(){
        List<Data> dataList = dataRepository.findAll();
        System.out.println();


        JsonArray categories = new JsonArray();
        JsonArray series = new JsonArray();
        JsonObject jo = new JsonObject();
        dataList.forEach(data->{
            categories.add(data.getCategory());
            series.add(data.getSeries());
        });


        jo.add("categories",categories);
        jo.add("series",series);
        return jo.toString();
    }

   */

}
