package com.example.javatojavascriptreader.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "line_chart")
public class Data {


    private Integer id;

    private String category;

    private Double series;


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    @Column
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    @Column
    public Double getSeries() {
        return series;
    }
    public void setSeries(Double series) {
        this.series = series;
    }

}