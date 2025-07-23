package com.test.dgragcircle.service;

import com.test.dgragcircle.model.CircleInfo;
import com.test.dgragcircle.repository.CircleInfoRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CircleInfoService {

    @Autowired
    private CircleInfoRepository circleInfoRepository;

    public CircleInfo getLastCircleInfo() {
        return circleInfoRepository.findFirstByOrderByCreatedAtDesc()
                .map(circleInfo -> {
                    log.info("Latest CircleInfo: {}", circleInfo);
                    return circleInfo;
                })
                .orElse(null);
    }
}

