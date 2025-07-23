package com.test.dgragcircle.repository;


import com.test.dgragcircle.model.CircleInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CircleInfoRepository extends JpaRepository<CircleInfo, Long > {
    Optional<CircleInfo> findFirstByOrderByCreatedAtDesc();

}
