<template>
  <Transition
    name="modal"
    appear>
    <div
      class="modalto modal-overlay">
      <div class="modal_window">
        <div class="modal_content">
          <div class="page-title">
            <button
              class="close-x-btn"
              @click="$emit('close')">
              ×
            </button>
            <p class="title">
              E-commerce Demand Data Pipeline
            </p>
            <p class="sub_title">
              이커머스 수요 마트를 만들면서 병목을 찾고 P1 개선까지 진행한 프로젝트입니다.
            </p>
            <a
              target="_blank"
              class="github_link"
              href="https://github.com/yms06034/ecommerce-demand-pipeline">
              GITHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>이커머스 수요예측 ML 의 input 인 <strong>상품×일자 grain mart</strong> (mart_product_demand_daily) 를 만드는 로컬 파이프라인입니다. happy path 만 보여주기보다 <strong>실패가 어디서 잡히는지</strong> 와 <strong>단일 노드 환경에서 성능을 어디까지 끌어올릴 수 있는지</strong> 를 측정하는 데 시간을 더 썼습니다.</p>
              <br />
              <strong>이 프로젝트로 보여주고 싶은 것</strong>
              <li>한 도메인 안에 DE 가 자주 다루는 5가지 소스 패턴이 다 들어있습니다 — 트랜잭션 DB, 마스터 DB, 이벤트 로그(JSONB), 외부 API, 객체 스토리지 CSV</li>
              <li>장애가 났을 때 어디까지 격리되는지 — 소스(DAG 분리), 계층(staging FK 게이트), 데이터(quarantine_records + raw_payload 보존) 의 3단계로 막았습니다</li>
              <li>측정 → 병목 식별 → 구조 개선 → 재측정의 한 사이클을 끝까지 닫았습니다 (P1 에서 dbt test 50× 단축)</li>
              <br />
              <p class="snd_title">
                Service INFO
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <strong><li>USE TECH</li></strong>
              <li style="margin-left: 20px;">
                Airflow 2.9 (LocalExecutor) · dbt 1.7 (Postgres adapter) · PostgreSQL 15 · MinIO · Docker Compose
              </li>
              <li style="margin-left: 20px;">
                Python (psycopg, boto3, requests) · pytest · GitHub Actions CI
              </li>
              <p></p>
              <strong><li>검증된 데이터 규모</li></strong>
              <li style="margin-left: 20px;">
                source 전체: 약 <strong>2,133,095 rows</strong> (Olist Brazilian E-Commerce 99K orders + Faker supplements)
              </li>
              <li style="margin-left: 20px;">
                단일 ingest sweep: 7 DAG × 5 task = 35 task SUCCESS, <strong>331,428 rows / wall ~32s</strong>, quarantine 0건
              </li>
              <li style="margin-left: 20px;">
                mart 최종: 99,153 rows / grain unique 통과
              </li>
              <br />
              <p class="snd_title">
                Pipeline
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>7개 ingest DAG 가 source 의 각 테이블을 raw 로 복사한 뒤, Airflow Dataset 의 AND-semantics 로 mart DAG 가 자동 발화. dbt 가 4계층 (raw → staging → intermediate → mart) 으로 변환.</p>
              <img
                class="content_img"
                src="~assets/project/DE/ecommerce_demand.png"
                alt="airflow datasets lineage" />
              <p>ingest 5-task 공통 패턴: <code>extract → validate → quarantine_write → load → log_finalize</code>. task 간 데이터는 stash schema 임시 테이블로 전달. <code>log_finalize</code> 는 <code>trigger_rule="all_done"</code> 으로 stash cleanup 보장.</p>
              <img
                class="content_img"
                src="~assets/project/DE/ecommerce_demand_ingest.png"
                alt="ingest_orders 5 task chain" />
              <br />
              <p class="snd_title">
                P1 — 병목 식별 후 구조 개선
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>mart DAG 가 7분 16초 걸렸는데 그중 96% 가 dbt test, 그 안에서 <code>relationships_stg_order_items.{order_id, product_id}</code> 두 개 test 가 97% 차지. 원인은 staging 모델이 view materialization 이라 NOT EXISTS 가 양쪽 view 풀-스캔.</p>
              <p>staging 3개 모델의 헤더 config 만 <code>view → table + indexes</code> 로 변경:</p>
              <li style="margin-left: 20px;">
                dbt test wall: 390s → <strong>7.77s (50× ↓)</strong>
              </li>
              <li style="margin-left: 20px;">
                mart DAG 전체 wall: 7분 16초 → <strong>22.9s (19× ↓)</strong>
              </li>
              <li style="margin-left: 20px;">
                dbt run wall: 9.85s → 10.57s (+7%, table 빌드 비용)
              </li>
              <li style="margin-left: 20px;">
                정합성 그대로 (dbt run 10/10, dbt test 48/48 PASS, relationships test 제거 / severity 변경 ✗)
              </li>
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                The source code of the project are of course on <a
                  target="_blank"
                  class="link"
                  href="https://github.com/yms06034/ecommerce-demand-pipeline">Github.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
$primary: #69b3a2;
$font : 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #69b3a2;
}
::-webkit-scrollbar-thumb:hover {
  background: #5cb29e;
}

.modalto {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal_window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    position: fixed;
    width: 820px;
    height: 700px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 2010;
    .modal_content {
      position: relative;
      width: 100%;
      background-color: rgb(255, 255, 255);
      padding: 0 60px;
      .page-title {
        position: relative;
        top: 0px;
        left: 0px;
        width: 100%;
        max-width: 820px !important;
        padding: 20px 20px 0 20px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .title {
          font-size: 23px;
          font-weight: 400;
          color: #111;
          line-height: 1.2;
          font-family: $font;
          margin: 0;
        }
        .sub_title {
          margin-top: 10px;
        }
        .github_link {
          margin-top: 25px;
          margin-bottom: 30px;
          border: 2px solid $primary;
          padding: 8px 10px;
          color: $primary;
          border-radius: .3rem;
          transition: all .2s;
          &:hover {
            transition: all .2s;
            background: $primary;
            color: #fff;
          }
        }
        .close-x-btn {
          position: absolute;
          top: 0px;
          right: 1px;
          width: 30px;
          height: 30px;
          border: none;
          background: none;
          font-size: 50px;
          cursor: pointer;
          color: #666;
          &:hover {
            color: #000;
          }
        }
      }
      .snd_title {
        margin: 0;
        text-align: left;
        font-size: 18px;
      }
      .page_content {
        text-align: left !important;
        overflow: hidden auto;
        position: relative;
        width: 100%;
        height: 440px;
        margin: 0px 0px 50px;
        .description {
          font-size: 15px;
          p {
            margin-bottom: 10px;
            padding-right: 5px;
            .link {
              color: $primary;
              &:hover {
                color: #111;
                text-decoration: underline;
              }
            }
          }
          code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            color: #c7254e;
          }
          .snd_title {
            font-size: 20px;
          }
          .content_img {
            margin-top: 20px;
            margin-bottom: 20px;
            width: 100%;
            height: auto;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
          }
        }
      }
    }
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
